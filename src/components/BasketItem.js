const BasketItem = (props) => {
    return (
        <li className='list-group-item'>
            {props.name} {props.price}руб x{props.quantity}
            <button
                className='btn btn-primary'
                onClick={() => props.setOrder(props.id)}
            >
                Delete from cart
            </button>
        </li>
    );
};

export {BasketItem};
