import Header from '@/components/Header';
import Footer from '@/components/Footer';




export default function virtualCloset(){

    return (
        <div className="max-w-4xl mx-auto p-6 text-center">
        
     <Header/>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Virtual Closet</h1>
          <p className="text-lg text-gray-600 mb-8">Manage and view your saved outfits here.</p>
          
          <Footer />
        </div>

    );
}