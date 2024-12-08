

const ClothingSuggestion = ([suggestions]) => {
    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold">
                Recommended Outfits
            </h3>
            <ul>{suggestions.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}</ul>
        </div>

    );
};

export default ClothingSuggestion;