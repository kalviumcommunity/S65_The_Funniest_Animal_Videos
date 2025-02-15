import { motion } from 'framer-motion';
import { Play, Heart, Upload, LogIn, Video, TrendingUp, Search } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/29623310/12747484_640_360_24fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="relative z-20 flex justify-between items-center p-6"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <Search className="w-8 h-8" /> {/* Changed icon */}
            <span className="text-3xl font-bold">PawPlay</span>
          </motion.div>
          
          <div className="flex items-center space-x-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <LogIn className="w-5 h-5" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-white text-black rounded-full flex items-center space-x-2"
            >
              <span>Join Now</span>
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center mr-40">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl space-y-8"
            >
              <motion.h1 
                className="text-7xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Where Pet Videos
                <span className="block">Make You Smile</span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Join our community of pet lovers sharing the most adorable, funny, and heartwarming moments.
              </motion.p>

              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black rounded-full flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Start Watching</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 rounded-full flex items-center space-x-2 backdrop-blur-sm hover:bg-white/10"
                >
                  <Upload className="w-5 h-5" />
                  <span>Share Videos</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-white text-black py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { icon: <Heart className="w-8 h-8" />, title: "Share Joy", description: "Upload your favorite pet moments" },
              { icon: <Video className="w-8 h-8" />, title: "Watch & Enjoy", description: "Endless entertainment from pets worldwide" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Go Viral", description: "Let your pet become the next sensation" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 border border-black/10 rounded-2xl text-center"
              >
                <div className="flex flex-col items-center space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;