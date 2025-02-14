import { X } from "lucide-react";

export default function Modal({
  cancelButton = true,
  isOpen,
  onClose,
  children,
  onSubmitHandler,
  title,
  buttonsVisible = true,
  button1,
  button2,
  width,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.7)] px-4">
      <div
        className={`bg-[var(--bg-color)] rounded-lg  shadow-xl ${
          width ? "md:w-1/3 w-80" : ""
        }  max-w-5xl lg:max-w-7xl p-8 relative max-h-[90vh] overflow-y-auto`}
      >
        {cancelButton && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-[var(--text-color)] hover:scale-110 transition-transform duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        )}
        <h2 className="font-bold text-xl text-center mb-4 font-muktaVaani border-b-[1px] pb-2">
          {title}
        </h2>
        <div className="mb-6">{children}</div>
        <div className="flex justify-end space-x-3">
          {button2 && buttonsVisible && (
            <button
              onClick={onClose}
              className="bg-red-500 cursor-pointer text-white px-5 py-2 font-muktaVaani rounded-md hover:bg-red-600 transition duration-200"
            >
              {button2}
            </button>
          )}
          {button1 && buttonsVisible && (
            <button
              onClick={onSubmitHandler}
              className="bg-green-600 cursor-pointer text-white px-5 py-2 rounded-md font-muktaVaani hover:bg-green-700 transition duration-200"
            >
              {button1}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
