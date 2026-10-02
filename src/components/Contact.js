const Contact =() => {
    return (
        <div>
            <h1 className=" font-bold text-2xl">Contact Us</h1>
            <div>
            <input className=" border border-primary py-2 px-2 m-2" type="text" placeholder="Enter your name" />
            <input className=" border border-primary py-2 px-2 m-2" type="email" placeholder="Enter your email" />
            <textarea className=" border border-primary py-2 px-2 m-2 align-top" placeholder="Enter your message"></textarea>
            <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 py-2 px-5 rounded m-2">Submit</button>
            </div>
            <p>This is the Contact page for our food delivery app.</p>
        </div>
    );
};

export default Contact; 