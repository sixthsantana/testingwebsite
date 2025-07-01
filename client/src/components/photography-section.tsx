import { useState } from "react";
import { Button } from "@/components/ui/button";
import { photoData, categories } from "@/lib/photo-catalog";

const PhotographySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos = selectedCategory === "All" 
    ? photoData 
    : photoData.filter(photo => photo.category === selectedCategory);

  return (
    <section id="photography" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4">Photography Portfolio</h2>
          <p className="text-portfolio-secondary text-lg max-w-2xl mx-auto">
            Capturing moments and telling stories through the lens
          </p>
        </div>

        {/* Photo Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-portfolio-accent text-white"
                  : "bg-white text-portfolio-secondary hover:bg-slate-100"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="group cursor-pointer overflow-hidden rounded-xl shadow-lg relative">
              <img 
                src={photo.image} 
                alt={photo.title} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  console.error(`Failed to load image: ${photo.image}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                  <p className="text-sm">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-portfolio-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-portfolio-accent/90 transition-colors">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;