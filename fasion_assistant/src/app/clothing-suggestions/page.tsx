import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ExternalDataFetcher from '@/components/ExternalDataFetcher'

export default function clothingSuggestionPage(){


    return (
        <div className="max-w-4xl mx-auto p-6 text-center">
          <Header />
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Clothing Suggestions</h1>
          <p className="text-lg text-gray-600 mb-8">Discover the latest outfit recommendations for you.</p>
          
          <ExternalDataFetcher/>
          <Footer />
        </div>
        

    );
}