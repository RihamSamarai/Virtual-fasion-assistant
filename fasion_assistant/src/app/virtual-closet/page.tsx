import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VirtuaCloset from '@/components/VirtualCloset';




export default function virtualCloset(){

    return (
        <div className="max-w-4xl mx-auto p-6 text-center">
        
          <Header/>
          <VirtuaCloset />
          
          
          <Footer />
        </div>

    );
}