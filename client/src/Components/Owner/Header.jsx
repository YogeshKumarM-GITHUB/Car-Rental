
import { assets } from '../../assets/assets.js'

const Header = () => {
    return (
        <div>
            <div className="md:w-full flex justify-between items-center p-4 border-b h-16 bg-white shadow-sm">
                <img src={assets.logo} />
                <p className="text-sm text-gray-700">Welcome, <strong>yogesh</strong></p>
            </div>
        </div>
    )
}
export default Header;