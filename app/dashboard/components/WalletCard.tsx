import { EyeIcon } from '@heroicons/react/20/solid'
import WalletCardBtns from './WalletCardBtns';

export default function WalletCard() {
  return (
    <div className="bg-brand-purple flex flex-col relative rounded-3xl w-full mx-auto h-56 px-4 py-6 text-white">
      <div className='w-full flex justify-between px-3 pt-1'>
        <div className="items-start space-y-2">
          <small className="capitalize text-xs font-bold">total balance</small>
          <p className="text-3xl font-bold">${"3,786"}</p>
        </div>
        <EyeIcon className='w-6 h-6' />
      </div>
     <WalletCardBtns/>
    </div>
  );
}
