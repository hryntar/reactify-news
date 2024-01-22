import { FC } from "react"
import "./Search.scss"

const Search: FC<{keywords: string, setKeywords: (keywords: string) => void}> = ({keywords, setKeywords}) => {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search news..." value={keywords} onChange={(e) => setKeywords(e.target.value)} />
    </div>
  )
}

export default Search