import { FaTwitter } from 'react-icons/fa'

const MemberCard = ({ member }) => {

    return (
        <div style={{ boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px' }} className=' rounded-md '>

            <div className='md:flex md:p-8 md:items-center  border-b border-b-gray-200'>
                <div style={{ backgroundImage: `url(${member.image})` }} className=' shrink-0 bg-center bg-cover rounded-full h-24 w-24 mx-auto relative  -top-12 md:static md:m-0'></div>

                <div className='p-4 -mt-14 md:m-0'>
                    <h3 className=' text-center md:text-left font-bold md:text-xl'>{member.name}</h3>
                    <p className=' text-center md:text-left text-gray-500 md:text-lg md:mb-2'>{member.title}</p>
                    <p className=' text-sm leading-7 text-justify md:text-xl md:leading-9'>{member.about}</p>
                </div>

            </div>

            <div className='flex justify-center mt-4 pb-4'>
                {member.twitter && <a href={`https://twitter.com/${member.twitter}`} className='flex items-center gap-1 text-gray-500 text-xs font-semibold' target='_blank' rel="noreferrer">
                    Connect on <FaTwitter color='#1DA1F2' /> @{member.twitter}
                </a>}
            </div>

        </div>

    )

}

export default MemberCard;