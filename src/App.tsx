import { I18nProvider } from './i18n';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { LanguageSwitch } from './components/LanguageSwitch';
import { products } from './data/products';
import './index.css';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="absolute top-4 right-4">
          <LanguageSwitch />
        </div>
        <Header />
        <main className="flex-1 px-4 md:px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;