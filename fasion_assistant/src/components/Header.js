import Link from 'next/link';

const Header = () => {
    return (
        <header className="p-4 bg-purple-700 text-white">
        <h1 className="text-xl font-bold">Virtual Fashion Assistant</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/virtual-closet">Virtual Closet</Link></li>
            <li><Link href="/clothing-suggestions">Clothing Suggestions</Link></li>
          </ul>
        </nav>
      </header>
    );
    
  };
  
  export default Header;