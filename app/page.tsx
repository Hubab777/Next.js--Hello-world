import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
   return (
    <div style={{ 
      backgroundColor: 'lavender', 
      height: 'auto'
      }}>

      <Header />
      <br />
      <br />
      <h1 style={{ 
        color: 'rgb(255, 255, 204)', 
        fontSize: '3rem', 
        textAlign: 'center', 
        backgroundColor: '#777799'
       }}>
          Hello, World!
      </h1>
      <br />
      <br />
      <Footer />
    </div>
   );
}