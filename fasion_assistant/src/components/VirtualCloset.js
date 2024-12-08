


const VirtualCloset = () => {
    return(
        <div className="p-4">
            <h3>Your Virtual Closet</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            
        </div>
    );
};



export default VirtualCloset;