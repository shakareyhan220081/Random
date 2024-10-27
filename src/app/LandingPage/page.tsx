import React from 'react';
import styles from './page.module.css';
import ImageCard from './ImageCard'; // Adjust the path if necessary

const images = [
  '/black.png', // Replace with actual image paths
  '/flame.jpg',
  '/firefly.jpg',
  '/robin.png',
  '/firefly.jpg',
  '/firefly.jpg',
  '/firefly.jpg',
];

const videos = [
  '/black.png', // Replace with actual video paths
  '/flame.mp4',
  '/firefly.mp4',
  '/robin.mp4',
  '/firefly.mp4',
  '/firefly.mp4',
  '/firefly.mp4',
];

const titles = [
    'Black shores',
    'Kiana Kaslana',
    'Firefly',
    'Robin',
    'Firefly',
    'Firefly',
    'Firefly',
  ];
  
  const descriptions = [
    'Black Shores adalah organisasi yang diselimuti misteri dan kekacauan, berkantor pusat di kepulauan terpencil dan dibangun di atas sebidang besar daratan bijih Tacetite yang masih tertutup rapat dari dunia dalam kabut digital yang tebal. Mereka berdedikasi pada tujuan besar penyelamatan dunia. Masih belum pasti kapan atau siapa yang akan mengangkat tabirnya, yang memungkinkannya untuk sekali lagi mengemban tugas menghubungkan dunia.',
    'Kiana Kaslana, atau K423, awalnya adalah seorang gadis yang sangat sombong, terlalu percaya diri, dan "idiot" yang sangat menyukai makanan. Dia periang dan percaya diri bahwa dia bisa melakukan apa pun yang dia inginkan. Dia sering tersenyum, bahkan saat dia terluka, dan senang ditemani teman-temannya, yang sangat dia sayangi. Sikapnya yang periang dan terlalu percaya diri sering kali menyebabkan dia membuat keputusan yang gegabah tanpa berpikir dua kali, terutama jika itu untuk menyelamatkan orang lain, bahkan jika itu berarti mengorbankan dirinya sendiri..',
    '"Kunang-kunang adalah makhluk ajaib, bukan? Mereka mungkin melemparkan diri mereka ke api atau tiba-tiba menjadi tua, tetapi setiap malam sebelum itu, mereka akan bersinar lebih terang dari bintang-bintang.".',
    '"Ada pepatah yang mengatakan, semakin banyak permintaan tamu, semakin kuat pula keterampilan koki... tapi tidak peduli apa yang orang lain katakan, aku akan selalu menuntut lebih dari diriku sendiri."',
   
  ];

const LandingPage: React.FC = () => {
  return (
    <div>
    <div className={styles.landingContainer}>
      {/* Main background image */}
      <img 
        src="https://media.discordapp.net/attachments/1020906721771794494/1299546461863677952/image_1.png?ex=671d9874&is=671c46f4&hm=26854dd16495534e2e5658d17b11fe977ec9a8e72fab80b1a84c17167fb3cd8d&=&format=webp&quality=lossless&width=550&height=310" 
        alt="corp_name" 
        className={styles.backgroundImage} 
      />

      {/* Overlay image with text */}
      <img 
        src="https://media.discordapp.net/attachments/1020906721771794494/1299564010613506118/aaaaaaaaaaa.png?ex=671da8cc&is=671c574c&hm=40fdc9af12eedc864f752f21f9c13d9f7617483c4108d08bea706b80c1c119e3&=&format=webp&quality=lossless&width=1440&height=481" 
        alt="Text Overlay"
        className={styles.overlayImage} 
      />

      {/* ImageCard Section */}
    </div>

      <div className={styles.imageCardContainer}> {/* New div for ImageCard */}

        <ImageCard images={images} videos={videos} titles={titles} descriptions={descriptions} /> Ensure props are passed correctly
      </div>
    </div>
  );
};

export default LandingPage;
