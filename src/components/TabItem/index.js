// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, onClickItemChange, isActive} = props
  const {tabId, displayText} = tabItem
  const isActiveTabItem = isActive ? 'tab-btn-item' : ''
  const onClickItem = () => {
    onClickItemChange(tabId)
  }
  return (
    <li className="list-item">
      <button className={`button ${isActiveTabItem}`} onClick={onClickItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
