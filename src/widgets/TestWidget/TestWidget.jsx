import { motion } from "framer-motion";

function TestWidget() {
  return (
    <motion.div
      className="w-full h-screen bg-purple-600 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl text-blue-50"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Test Widget
      </motion.h2>
    </motion.div>
  );
}

export default TestWidget;
