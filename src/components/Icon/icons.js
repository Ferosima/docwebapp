/* eslint-disable prefer-const */
import {
  IoDocumentsOutline,
  IoDocumentsSharp,
  IoSettingsOutline,
  IoSettingsSharp,
  IoNotificationsOutline,
  IoNotifications,
  IoConstructSharp,
  IoCloseSharp,
  IoMenu,
  IoArrowBack,
  IoSaveOutline,
} from "react-icons/io5";
import {
  HiPencil, HiOutlinePencil, HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight,
} from "react-icons/hi";
import { AiOutlineQuestionCircle, AiOutlineInfoCircle, AiFillInfoCircle } from "react-icons/ai";
import { FaFileSignature, FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { BiLogOut, BiCheckCircle, BiSearch } from "react-icons/bi";
import {
  BsPeople, BsPeopleFill, BsArrowBarRight, BsThreeDotsVertical,
} from "react-icons/bs";
import {
  RiPenNibFill,
  RiPenNibLine,
  RiPencilFill,
  RiPencilLine,
  RiBuilding2Line,
  RiBuilding2Fill,
  RiDeleteBin6Line,
} from "react-icons/ri";

export const icons = {
  documents: <IoDocumentsSharp />,
  documentsOutline: <IoDocumentsOutline />,
  pen: <HiPencil />,
  penOutline: <HiOutlinePencil />,
  signatures: <HiPencil />,
  signaturesOutline: <HiOutlinePencil />,
  // signatures: <FaFileSignature />,
  organization: <RiBuilding2Fill />,
  organizationOutline: <RiBuilding2Line />,
  settings: <IoSettingsSharp />,
  settingsOutline: <IoSettingsOutline />,
  notifications: <IoNotifications />,
  notificationsOutline: <IoNotificationsOutline />,
  arrowLeft: <HiOutlineArrowCircleLeft />,
  arrowRight: <HiOutlineArrowCircleRight />,
  logout: <BiLogOut />,
  user: <FaUserCircle />,
  userOutline: <FaRegUserCircle />,
  undefined: <AiOutlineQuestionCircle />,
  people: <BsPeopleFill />,
  peopleOutline: <BsPeople />,
  construct: <IoConstructSharp />,
  close: <IoCloseSharp />,
  done: <BiCheckCircle />,
  search: <BiSearch />,
  menu: <IoMenu />,
  arrowBack: <IoArrowBack />,
  arrowCollapse: <BsArrowBarRight />,
  save: <IoSaveOutline />,
  info: <AiFillInfoCircle />,
  infoOutline: <AiOutlineInfoCircle />,
  dots: <BsThreeDotsVertical />,
  delete: <RiDeleteBin6Line />,
};

export default icons;
