import { Header } from './Header';
import { Footer } from './Footer';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-dark font-volkhov mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-text-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            {description || "This page is coming soon. Continue exploring or contact us for more information about our services."}
          </p>
          
          <div className="bg-bg-cream rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-text-dark mb-4">Page Under Construction</h2>
            <p className="text-text-gray mb-6">
              We're working hard to bring you amazing content. This page will be available soon!
            </p>
            <p className="text-text-gray text-sm">
              Want to help us build this feature? Continue prompting to add more content to this page.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
