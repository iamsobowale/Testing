import aaeChampionBackpack from '../assets/images/aae-champion-backpack.webp'
import aaeChampionCrewneck from '../assets/images/aae-champion-crewneck.webp'
import aaeChampionHoodie from '../assets/images/aae-champion-hoodie.webp'
import aaeChampionWindbreaker from '../assets/images/aae-champion-windbreaker.webp'
import aaeEmbroidedBeanie from '../assets/images/aae-embroided-beanie.webp'
import aaeEmbroidedSocks from '../assets/images/aae-embroided-socks.webp'
import aaeLogoCrewneck from '../assets/images/aae-logo-crewneck.webp'
import aaeLogoHat from '../assets/images/aae-logo-hat.webp'
import aaeLogoHoodie from '../assets/images/aae-logo-hoodie.webp'
import aaeLogoJoggers from '../assets/images/aae-logo-joggers.webp'
import aaeLogoTshirt from '../assets/images/aae-logo-tshirt.webp'
import aaeProFlag from '../assets/images/aae-pro-flag.webp'
import aaeProHoodie from '../assets/images/aae-pro-hoodie.webp'
import aaeProJersey from '../assets/images/aae-pro-jersey.webp'
import aaeProJoggers from '../assets/images/aae-pro-joggers.webp'



import { ProductCard } from '../components'


const ProductContainer = () => {

    const products = [
        {
            
            name: 'Above All Else Embroidered Socks',
            image: aaeEmbroidedSocks
        },
        {
            name: 'Above All Else Embroidered Beanie',
            image: aaeEmbroidedBeanie
        },
        {
            name: 'Above All Else Champion Hoodie',
            image: aaeChampionHoodie
        },
        {
            name: 'Above All Else Champion Windbreaker',
            image: aaeChampionWindbreaker
        },
        {
            name: 'Above All Else Champion Crewneck',
            image: aaeChampionCrewneck
        },
        {
            name: 'Above All Else Champion Backpack',
            image: aaeChampionBackpack
        },
        {
            name: 'Above All Else Logo T-shirt',
            image: aaeLogoTshirt
        },
        {
            name: 'Above All Else Logo Hoodie',
            image: aaeLogoHoodie
        },
        {
            name: 'Above All Else Logo Crewneck',
            image: aaeLogoCrewneck
        },
        {
            name: 'Above All Else Logo Joggers',
            image: aaeLogoJoggers
        },
        {
            name: 'Above All Else Logo Hat',
            image: aaeLogoHat
        },
        {
            name: 'Above All Else Pro Flag',
            image: aaeProFlag
        },
        {
            name: 'Above All Else Pro Hoodie',
            image: aaeProHoodie
        },
        {
            name: 'Above All Else Pro Jersey',
            image: aaeProJersey
        },
        {
            name: 'Above All Else Pro Joggers',
            image: aaeProJoggers
        }
       
    ]

    return (

        <div className='flex flex-wrap justify-center md:justify-between gap-6 p-4 md:p-8 md:px-16'>

            {products.map((product, index) => <ProductCard key={index} name={product.name} image={product.image} />)}

        </div>

    )
}

export default ProductContainer;