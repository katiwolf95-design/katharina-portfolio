import { motion } from "motion/react";
import StampImage from "../../../assets/images/stamp.png";

type StampProps = {
    opened: boolean;
    onClick: () => void;
};

export default function Stamp({ opened, onClick }: StampProps) {
    return (
        <motion.img
            src={StampImage}
            alt="Unicorn Stamp"
            className="
                w-[190px]
                cursor-pointer
                select-none
                drop-shadow-lg
            "
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}

            whileHover={{
                rotate: opened ? 8 : -4,
                y: opened ? -18 : -5,
                scale: opened ? 1.03 : 1.03,
            }}
            whileTap={{
                scale: .98,
            }}
            animate={{
                rotate: opened ? 8 : 0,
                x: opened ? 26 : 0,
                y: opened ? -18 : 0,
                scale: opened ? 1.02 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
            }}
        />
    );
}