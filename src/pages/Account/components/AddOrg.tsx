import { Plus } from 'lucide-react'
import { DatabaseSvg } from '../../../assets/Svg/Account/Account'
import { Button } from '../../../components/ui/Button'

function AddOrg() {
    return (
        <div style={{ height: 'calc(100vh -  100px)', }} className='max-w-xl h-[calc(100vh - 70px)] m-auto text-center flex items-center justify-center flex-col'   >
            <div>
                <div className='grid grid-cols-2 max-w-[280px] m-auto ' >
                    <DatabaseSvg />
                    <DatabaseSvg />
                    <DatabaseSvg />
                    <DatabaseSvg />
                </div>
                <p className='text-center my-5' >Represent the teams, business customers, and partner companies that access your applications as organizations in Auth0.</p>
                <Button className='bg-[#9EFF00] text-black hover:bg-[#9EFF00]' > <Plus />
                    Create New Organization
                </Button>
            </div>
        </div>
    )
}

export default AddOrg