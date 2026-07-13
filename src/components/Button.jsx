export default function Button(label) {
    return (
        <div>
            <button className="mt-4 block w-full text-center bg-primary font-bold hover:bg-primary-light text-white text-sm px-6 py-2 rounded-lg transition-colors duration-200"
            >{label}
            </button>
        </div>
    );
}