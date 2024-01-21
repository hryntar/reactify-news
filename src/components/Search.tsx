import { FC } from "react"

const Search: FC<{keywords: string, setKeywords: React.Dispatch<React.SetStateAction<string>>}> = ({keywords, setKeywords}) => {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search news..." value={keywords} onChange={(e) => setKeywords(e.target.value)} />
    </div>
  )
}

export default Search