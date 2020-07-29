import React,{Component} from "react";
import  Loader from "../src/loader.js";
import "lodash"
import Table from "../src/table"
import Modelselector from "../src/modelselector";
import Showuser from "../src/ShowUserinfo";
import Pagination from "react-js-pagination"
import Seerch from "../src/search"
import AddTable from "../src/AddTable"
import Showinput from "../src/Showinput";



export default class App extends Component{

    constructor(state) {
        super(state);
        this.state = {
            data: [],
            sort: "asc",
            sorti: "id",// desc
            row: null,
            isModalSelector: false,
            loading: false,
            activePage: 0,
            input: false
        }
        this.useBase = (url) =>{
            console.log(url)
            this.setState({
                isModalSelector: true,
                loading: true
            })
            this.fetchData(url)
        }
        this.sortTable = (sorti) =>{
            console.log(sorti)
            const sort = this.state.sort === "asc" ? "desc" : "asc";
            const data = _.orderBy(this.state.data, sorti ,sort)
            this.setState({data: data, sort: sort, sorti: sorti})
        }
        this.onRowselect = row => {
            console.log(row)
            const new_row = row
            console.log(new_row)
            this.setState({
                row: new_row
            })


        }
        this.searchValue = search =>{
            console.log(search)
            this.setState({
                search,
                activePage: 0
            })
        }

        this.addInput = input =>{
            console.log(input)
            this.setState({
                input: input
            })
            console.log(input)
        }
        this.addInTable = inputdata =>{
            console.log(inputdata)
            console.log(this.state.data)
            let new_data = this.state.data.unshift(inputdata)
            console.log(new_data)
            this.setState({
                inputdata,
                activePage: 0
            })
            // console.log(this.state.data)
        }

    }

    async fetchData(url) {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(url + proxyurl)
        const data = await  response.json()
        console.log('вызвалась')
        this.setState({
            data: _.orderBy(data, this.state.sorti, this.state.sort),
            loading: false
        })
        console.log(data)
    }

    handlePageChange (pageNumber) {

        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
    showSearchData(){
        const {data, search} = this.state
        if (!search){
            return data
        }
        return data.filter(item =>{
            return item["firstName"].toLowerCase().includes(search.toLowerCase())
            || item["lastName"].toLowerCase().includes(search.toLowerCase())
            || item["phone"].toLowerCase().includes(search.toLowerCase())
            || item["email"].toLowerCase().includes(search.toLowerCase())
        })
    }

    render(){

        const pageSize = 50;
        if (!this.state.isModalSelector){
            return (
                <div className = "conteiner">

                    {
                     <Modelselector onSelect = {this.useBase} />
                    }
                </div>

            )
        }
        const filterTable = this.showSearchData()
        const showPaginate = _.chunk(filterTable, pageSize)[this.state.activePage]
        return (

            <div className = "conteiner">
                {
                    this.state.loading
                        ? <Loader />

                        :<React.Fragment>
                            <Seerch searchValue = {this.searchValue} />
                            <AddTable addInput = {this.addInput}/>


                            <Showinput input={this.state.input}
                                       addInTable ={this.addInTable}
                            />
                            <Table
                                datas={showPaginate}
                                sorting={this.sortTable}
                                onRowselect={this.onRowselect}
                            /></React.Fragment>

                }
                {
                    this.state.data.length > pageSize
                        ? <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={50}
                            totalItemsCount={951}
                            pageRangeDisplayed={19}
                            onChange={this.handlePageChange.bind(this)
                            }
                        />
                        : null
                }
                {
                    this.state.row
                        ?<Showuser row={this.state.row}  />
                        : null
                }
            </div>
        )
    }
}