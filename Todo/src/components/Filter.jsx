
function Filter (props) {

    
    return (
        <div className="summary-tab">
            <span>{`${props.itemsLeft} ${props.itemsLeft <= 1 ? 'item' : 'items'} left`}</span>
            
            <div className="filter-tab">
                <button className="all filter"
                        data-active={`${props.filter === 'all' ? 'true' : 'false'}`} 
                        onClick={() => props.handleFilterChange('all')}
                >       All
                </button> 
                <button className="active filter" 
                        onClick={() => props.handleFilterChange('active')}
                        data-active={`${props.filter === 'active' ? 'true' : 'false'}`} 
                >       Active
                </button> 
                <button className="completed filter" 
                        onClick={() => props.handleFilterChange('completed')}
                        data-active={`${props.filter === 'completed' ? 'true' : 'false'}`} 
                >       Completed
                </button>
            </div>

            <button className="clear" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div> 
    )
}

export default Filter