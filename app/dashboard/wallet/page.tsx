import {Metadata} from "next"
import { FilledButton } from '@/utils/buttons'
import { EyeIcon } from '@heroicons/react/20/solid'
import { SeeAllTransactions, TransactionTile, WalletCard } from "../components"

let transactions: string[] = [];

for (let i = 0; i <= 4; i++) {
  transactions.push(`transaction-${i + 1}`);
}


export const metadata :Metadata ={
    title: "Dashboard | Wallet",
    description: "...",
}

export default function WalletPage() {
  return (
    <div className="mt-6 md:pb-3">
      <div className="space-y-4 px-4">
        <WalletCard />
        <SeeAllTransactions />
        <div className="space-y-6">
          {
            // Change key Later
            transactions.map((transaction) => (
              <TransactionTile key={transaction} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
