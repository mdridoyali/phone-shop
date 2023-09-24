import PhonesCard from "./PhonesCard";


const Phones = ({phones}) => {
    return (
        <div className='text-center text-2xl'>
            <h2>All Categories Phones</h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 py-5">
                {
                    phones?.map((phone, idx) => <PhonesCard key={idx} phone={phone} ></PhonesCard> )
                }
            </div>
        </div>
    );
};

export default Phones;