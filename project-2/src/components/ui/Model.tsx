import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ReactNode } from "react";

interface Iprops {
  isOpen: boolean;
  closeModel: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, closeModel, title, children }: Iprops) => {
  //   const [isOpen, setIsOpen] = useState(true);

  //   function open() {
  //     setIsOpen(true);
  //   }

  //   function close() {
  //     setIsOpen(false);
  //   }

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeModel}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  {title && (
                    <DialogTitle
                      as="h3"
                      className="text-base/7 font-medium text-white"
                    >
                      {title}
                    </DialogTitle>
                  )}

                  <p className="mt-2 text-sm/6 text-white/50">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                  <div className="mt-4">{children}</div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
