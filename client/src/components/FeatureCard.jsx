import { motion } from 'framer-motion';

const FeaturesCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 border border-black/10 rounded-2xl text-center"
    >
      <div className="flex flex-col items-center space-y-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;