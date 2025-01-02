import { HiOutlineMenuAlt2, HiOutlineMenu } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'
import HamburgerIcon from '@/assets/svg/HamburgerIcon'

export interface NavToggleProps extends CommonProps {
    toggled?: boolean
}

const NavToggle = ({ toggled, className }: NavToggleProps) => {
    return (
        <div className={className}>
            { <HamburgerIcon /> }
        </div>
    )
}

export default NavToggle
