import { Play, Shield, Zap, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import videos
import video1 from "@/assets/petgromer_videos/pet groom nail grinder video.mp4";
import video2 from "@/assets/petgromer_videos/pet grommer nail grinder video 2.mp4";

const HowToUseSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleVideoPause = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            How to Use Your Pet Nail Grinder
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Follow our step-by-step guide for safe, effective nail trimming that keeps your pet comfortable and stress-free.
          </p>
        </div>

        {/* Step 1 - Video Right, Text Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-800">
                Preparation & Safety
              </h3>
            </div>
            
            <div className="space-y-4 text-emerald-700">
              <p className="text-lg">
                <strong>Before you start:</strong> Ensure your pet is calm and comfortable. Choose the appropriate grinding port based on your pet's size:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Small port:</strong> For small dogs and cats</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Medium port:</strong> For medium-sized dogs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Large port:</strong> For large dogs</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Safety First</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-lg">
                <Volume2 className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Ultra Quiet (&lt;45dB)</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-elegant p-6">
              <video
                className="w-full rounded-xl"
                controls
                poster=""
                onPlay={() => handleVideoPlay('video1')}
                onPause={handleVideoPause}
                style={{ aspectRatio: '16/9' }}
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {playingVideo !== 'video1' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                  <Button
                    variant="hero"
                    size="lg"
                    className="rounded-full h-16 w-16 p-0"
                    onClick={() => {
                      const video = document.querySelector('video') as HTMLVideoElement;
                      if (video) video.play();
                    }}
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 2 - Video Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white rounded-2xl shadow-elegant p-6">
              <video
                className="w-full rounded-xl"
                controls
                poster=""
                onPlay={() => handleVideoPlay('video2')}
                onPause={handleVideoPause}
                style={{ aspectRatio: '16/9' }}
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {playingVideo !== 'video2' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                  <Button
                    variant="hero"
                    size="lg"
                    className="rounded-full h-16 w-16 p-0"
                    onClick={() => {
                      const videos = document.querySelectorAll('video') as NodeListOf<HTMLVideoElement>;
                      if (videos[1]) videos[1].play();
                    }}
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-800">
                Grinding Process
              </h3>
            </div>
            
            <div className="space-y-4 text-emerald-700">
              <p className="text-lg">
                <strong>Operating steps:</strong> Turn on the LED light for better visibility and select the appropriate speed setting (1-5) based on your pet's nail hardness.
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Speed 1-2:</strong> For soft nails or nervous pets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Speed 3-4:</strong> For medium hardness nails</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Speed 5:</strong> For thick, hard nails</span>
                </li>
              </ul>
              <p className="text-lg">
                <strong>Important:</strong> The LED light helps you see the pink quick inside the nail - avoid grinding into this area to prevent pain and bleeding.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-700 font-medium">5 Speed Settings</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-lg">
                <span className="w-5 h-5 text-purple-600 text-center">💡</span>
                <span className="text-purple-700 font-medium">LED Light</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Summary */}
        <div className="mt-20 bg-white rounded-2xl shadow-elegant p-8">
          <h3 className="text-2xl font-bold text-emerald-800 text-center mb-8">
            Why Choose Our Professional Nail Grinder?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Volume2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-emerald-800">Super Quiet</h4>
              <p className="text-sm text-emerald-600">Less than 45dB noise level - won't scare your pet</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-emerald-800">5 Speed Settings</h4>
              <p className="text-sm text-emerald-600">Adjustable speeds for different nail types and pet sizes</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-semibold text-emerald-800">LED Light</h4>
              <p className="text-sm text-emerald-600">Enhanced visibility to avoid over-grinding</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-emerald-800">Safety Cap</h4>
              <p className="text-sm text-emerald-600">Prevents over-cutting and protects nail beds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;