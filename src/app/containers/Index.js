import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Index extends Component {
    render() {
       
        return (
        	<div id="container">
				<div className="content index mbSix">
					<div className="block-box fl">
						<div className="apiType-title title">
							<div className="fl">
								<input id="js_searchInput" className="default-border" placeholder="输入关键字" />
								<button id="js_searchBtn" className="green-btn search-btn">查询</button>
								<a href="javascript:;" id="js_about_me" className="about_me">我负责的</a>
							</div>
							
							<a href="javascript:;" className="js_toAddProduct smallAddBtn" className="fr">添加产品</a>
							<a href="javascript:;" className="js_toAddVersion smallAddBtn" className="fr">添加版本</a>
							<a href="javascript:;" className="js_toAddApi smallAddBtn" className="fr">添加API</a>
							
						</div>
						<div className="apiType-content block-content">
							<div id="js_index_table"></div>
							<div id="js_page"></div>
						</div>
						
					</div>
					<div className="fr news">
						<div id="js_submitAudit" className="index-info mine block-box">
							
						</div>
						<div id="js_waitAudit" className="index-info latest block-box">
					
						</div>
					</div>
				</div>
			</div>
        )
    }
}  

export default Index;