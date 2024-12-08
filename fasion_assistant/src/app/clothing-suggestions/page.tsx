import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ClothingSuggestion from '@/components/ClothingSuggestions'
import ExternalDataFetcher from '@/components/ExternalDataFetcher'

export default function clothingSuggestionPage(){


    return (
        <div className="max-w-4xl mx-auto p-6 text-center">
          <Header />
          <ClothingSuggestion />
          
          
          
          <ExternalDataFetcher/>
          <Footer />
        </div>
        

    );
}