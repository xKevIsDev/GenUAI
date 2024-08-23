export const name = "AnimatedModal";

export const importDocs = `
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "/aceternity/components/ui/animated-modal";
`;

export const usageDocs = `
<Modal>
  <ModalTrigger className="bg-black text-white">Book your flight</ModalTrigger>
  <ModalBody>
    <ModalContent>
      <h4 className="text-lg font-bold text-center mb-8">
        Book your trip to <span className="bg-gray-100 border">Bali</span> now! ✈️
      </h4>
      <div className="flex">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="rounded-xl overflow-hidden"
          >
            <Image src={image} alt="Bali" width={100} height={100} className="object-cover" />
          </motion.div>
        ))}
      </div>
      <div className="py-6">
        <div className="flex items-center">
          <PlaneIcon className="h-4 w-4" /> <span>5 flights</span>
        </div>
        <div className="flex items-center">
          <ElevatorIcon className="h-4 w-4" /> <span>12 hotels</span>
        </div>
      </div>
    </ModalContent>
    <ModalFooter>
      <button className="bg-gray-200">Cancel</button>
      <button className="bg-black text-white">Book Now</button>
    </ModalFooter>
  </ModalBody>
</Modal>
`;