const Footer = () => {
    return (
        <footer className={'clear-both bg-grey-color h-20 rounded-b-2xl grid grid-cols-12 items-center'}>
            <div className={'col-start-5 col-span-2 bg-red-color border-black border-2 rounded-md px-3 text-center py-2 cursor-pointer hover:bg-red-500 hover:text-white'}>Send me an <span
                className={"text-black uppercase"}>email</span></div>
        </footer>
    );
};

export default Footer;