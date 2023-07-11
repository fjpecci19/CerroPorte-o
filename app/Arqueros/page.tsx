import { Card } from "@/components/ui/Card"

export default function Arqueros() {
    return (
        <div className='container grid mt-48'>
            <Card className="grid gap-10 bg-green-800 p-7 mb-10">
                <div>
                    <h2 className="text-2xl sm:text-5xl font-bold text-foreground ">Hola</h2>
                    <hr className='my-5 border-accent' />
                    <p className='flex text-xl mb-10 items-center'></p>
                    <p className='text-xl'>Hola</p>
                </div>
            </Card>
        </div>
    )
}