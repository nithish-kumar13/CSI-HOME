/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import UpBar from "./UpBar";
import './cash_wallet.css'

const CashWallet = () =>{
    return(
        <>
        
        <UpBar/>

        <div className="container6">
            <div className="first_contain6">
            <div className="sub_first_contain6">
                <div className="title_contain6">
                    <h3>Cash Wallet Report of 707123 (Balance - TRX 56.00) </h3>
                    <br/>
                    
                    <span className="left"> 
                        <label id="up-display" className="title_contain6">Display  <select name="nos" id="nos">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                       
                      </select> Records Per Page</label>
                        </span>
                    <span className="right">
                    <label id="up-display" className="title_contain6_sub">Search: <input type="text" id="search-top"/></label>
                    </span>
                    <br/>
                    <table id="customers3">
 <tr>
    <th>Serial <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>Date  <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th> <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>Transaction  <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>ID  <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>Type <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
  </tr>
  <tr>
    <td>1</td>
    <td>25/10/2021</td>
    <td>TRX 1.00</td>
    <td>Daily Returns</td>
    <td>707123</td>
    <td>Credit</td>
    </tr>

    <tr>
    <td>2</td>
    <td>24/10/2021</td>
    <td>TRX 1.00</td>
    <td>Daily Returns</td>
    <td>707123</td>
    <td>Credit</td>
    </tr>

    <tr>
    <td>3</td>
    <td>23/10/2021</td>
    <td>TRX 1.00</td>
    <td>Daily Returns</td>
    <td>707123</td>
    <td>Credit</td>
    </tr>

    <tr>
    <td>4</td>
    <td>22/10/2021</td>
    <td>TRX 1.00</td>
    <td>Daily Returns</td>
    <td>707123</td>
    <td>Credit</td>
    </tr>
  </table>
        
                    <span className="left"> 
                        <p className="title_contain6">Showing Page 1 of 10</p>
                        </span>
                    <span className="right">
                    <p id="down-show" className="title_contain6">Previous <button id="badge1">1</button> <button className="badge-none">2</button> 
                     <button className="badge-none">3</button> <button className="badge-none">4</button> ... <button className="badge-none">10</button> Next</p>
                    </span>
    
                </div>
            </div>
            </div>

            </div>
     
        
</>
    
    )};
export default CashWallet;