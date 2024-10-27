'use client';
import React, { useEffect, useState } from 'react';
import './hover.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageCardProps {
  images: string[];
  videos: string[];
  titles: string[];
  descriptions: string[];
}

const ImageCard: React.FC<ImageCardProps> = ({
  images,
  videos,
  titles,
  descriptions,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Indicate that the component has mounted (client-side only)
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // Run only on the client

    const mainContainer = document.querySelector('.main-container') as HTMLElement;
    const imagePreview = document.querySelectorAll('.image-preview') as NodeListOf<HTMLElement>;
    const imageElements = document.querySelectorAll('.image-preview img') as NodeListOf<HTMLImageElement>;
    const videoElements = document.querySelectorAll('video') as NodeListOf<HTMLVideoElement>;

    const setOpacity = (opacity: number) => {
      imageElements.forEach((img) => {
        img.style.opacity = opacity.toString();
      });
    };

    const expandCard = (preview: HTMLElement, flexValue: number) => 
      gsap.to(preview, {
        duration: 0.1,
        flex: flexValue,
        ease: 'power2.inOut',
      });

    mainContainer.addEventListener('mouseenter', () => setOpacity(0.2));
    mainContainer.addEventListener('mouseleave', () => setOpacity(1));

    // ScrollTrigger animations
    imagePreview.forEach((preview, index) => {
      gsap.fromTo(
        preview,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: preview,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.4,
        }
      );

      preview.addEventListener('mouseenter', () => {
        expandCard(preview, 2);
        videoElements[index]?.play();
      });
      preview.addEventListener('mouseleave', () => {
        expandCard(preview, 1);
        videoElements[index]?.pause();
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      mainContainer.removeEventListener('mouseenter', () => setOpacity(0.2));
      mainContainer.removeEventListener('mouseleave', () => setOpacity(1));
      imagePreview.forEach((preview, index) => {
        preview.removeEventListener('mouseenter', () => {
          expandCard(preview, 2);
          videoElements[index]?.play();
        });
        preview.removeEventListener('mouseleave', () => {
          expandCard(preview, 1);
          videoElements[index]?.pause();
        });
      });
    };
  }, [mounted]);

  // Render nothing on the server, render content only after mounting on the client
  if (!mounted) return null;

  return (
    <div className='main-container'>
      {images.map((image, index) => (
        <div className='image-preview' key={index}>
          <img src={image} alt={`char ${index + 1}`} />
          <video loop muted playsInline aria-hidden='true'>
            <source src={videos[index]} type='video/mp4' />
          </video>
          <span className='overlay'>
            <div className='desc'>
              <h1>{titles[index]}</h1>
              <p style={{ textAlign: 'justify' }}>{descriptions[index]}</p>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
