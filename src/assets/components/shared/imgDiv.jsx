

export default function ImgDiv({img, hidden=false}) {
    return (
        <div className={`w-full md:w-1/2 justify-end pt-20 md:pt-0  md:justify-end items-center
            ${hidden ? 'hidden md:flex' : 'flex'}
        `}  >
            <img  className='h-3/5 w-4/5 rounded-xl' src={img} alt="" />
        </div>      
    );
}