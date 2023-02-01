import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updatedActiveTabId(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
