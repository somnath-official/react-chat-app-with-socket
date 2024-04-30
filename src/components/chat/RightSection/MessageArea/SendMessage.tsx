import SendMessageSvg from '@/assets/icons/Send-message.svg'
import MicrophoneSvg from '@/assets/icons/Microphone.svg'
import PaperClipSvg from '@/assets/icons/PaperClip.svg'

export const SendMessage = () => {
  return (
    <div className="absolute bottom-0 left-0 flex items-center w-full gap-x-2">
      <div className='w-full flex items-center gap-x-2'>
        <textarea
          className="message-box block w-full rounded border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6 outline-none resize-none"
          placeholder="Message..."
          rows={2}
        ></textarea>
        <div className='rounded-full bg-blue-300 w-[48px] h-[48px] p-2 flex items-center justify-center'>
          <img src={SendMessageSvg} alt='Send icon' className='h-8 w-8 cursor-pointer' />
        </div>
      </div>

      <span className="isolate inline-flex">
        <button
          type="button"
          className="shadow relative inline-flex items-center gap-x-1.5 rounded-tl-full rounded-bl-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          <img src={MicrophoneSvg} alt='Send icon' className='h-8 w-8 cursor-pointer' />
        </button>
        <button
          type="button"
          className="shadow relative -ml-px inline-flex items-center rounded-tr-full rounded-br-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          <img src={PaperClipSvg} alt='File icon' className='h-8 w-8 cursor-pointer' />
        </button>
      </span>
    </div>
  )
}
