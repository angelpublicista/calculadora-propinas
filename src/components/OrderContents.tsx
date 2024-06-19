import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem}: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-5">
            {
                order.map(item => (
                    <div 
                        key={item.id}
                        className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
                        >
                        <div>
                            <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                            </p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="bg-red-600 h-8 w-8 text-white rounded-full font-black">
                            x
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
