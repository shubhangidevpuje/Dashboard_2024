import "./tables.css"
const RegularTable = () => {
    return (
        <>

            <div className="content">
                <div className="row">
                    <div className="col-md-12 pt-4">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Simple Table</h4></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Country</th>
                                                <th>City</th>
                                                <th className="text-right">Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td>Dakota Rice</td>
                                                <td>Niger</td>
                                                <td>Oud-Turnhout</td>
                                                <td className="text-right">$36,738
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Minerva Hooper</td>
                                                <td>Curaçao</td>
                                                <td>Sinaai-Waas</td>
                                                <td className="text-right">$23,789
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Sage Rodriguez</td>
                                                <td>Netherlands</td>
                                                <td>Baileux</td>
                                                <td className="text-right">$56,142
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Philip Chaney</td>
                                                <td>Korea, South</td>
                                                <td>Overland Park</td>
                                                <td className="text-right">$38,735
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Doris Greene</td>
                                                <td>Malawi</td>
                                                <td>Feldkirchen in Kärnten</td>
                                                <td className="text-right">$63,542
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Mason Porter</td>
                                                <td>Chile</td>
                                                <td>Gloucester</td>
                                                <td className="text-right">$78,615
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Jon Porter</td>
                                                <td>Portugal</td>
                                                <td>Gloucester</td>
                                                <td className="text-right">$98,615
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 pt-4">
                        <div className="card-plain card">
                            <div className="card-header"><h4 className="card-title">Table on Plain Background</h4><p className="card-category">Here is a subtitle for this table</p></div>
                            <div className="card-body">
                                <div className="table-responsive"><table className="table"><thead>
                                    <tr><th>Name</th><th>Country</th><th>City</th><th className="text-right">Salary</th></tr></thead><tbody>
                                        <tr>
                                            <td>Dakota Rice</td>
                                            <td>Niger</td>
                                            <td>Oud-Turnhout</td>
                                            <td className="text-right">$36,738
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Minerva Hooper</td>
                                            <td>Curaçao</td>
                                            <td>Sinaai-Waas</td>
                                            <td className="text-right">$23,789
                                            </td>
                                        </tr><tr>
                                            <td>Sage Rodriguez</td>
                                            <td>Netherlands</td>
                                            <td>Baileux</td>
                                            <td className="text-right">$56,142
                                            </td>
                                        </tr><tr>
                                            <td>Philip Chaney</td>
                                            <td>Korea, South</td>
                                            <td>Overland Park</td>
                                            <td className="text-right">$38,735
                                            </td>
                                        </tr><tr>
                                            <td>Doris Greene</td>
                                            <td>Malawi</td>
                                            <td>Feldkirchen in Kärnten</td>
                                            <td className="text-right">$63,542
                                            </td>
                                        </tr><tr>
                                            <td>Mason Porter</td>
                                            <td>Chile</td>
                                            <td>Gloucester</td>
                                            <td className="text-right">$78,615
                                            </td>
                                        </tr><tr>
                                            <td>Jon Porter</td>
                                            <td>Portugal</td>
                                            <td>Gloucester</td>
                                            <td className="text-right">$98,615
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 py-4">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Regular Table with Colors</h4></div>
                            <div className="table-full-width table-hover card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Country</th>
                                                <th>City</th>
                                                <th className="text-right">Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-success">
                                                <td>Dakota Rice</td>
                                                <td>Niger</td>
                                                <td>Oud-Turnhout</td>
                                                <td className="text-right">$36,738
                                                </td>
                                            </tr><tr>
                                                <td>Minerva Hooper</td>
                                                <td>Curaçao</td>
                                                <td>Sinaai-Waas</td>
                                                <td className="text-right">$23,789
                                                </td>
                                            </tr><tr className="table-info">
                                                <td>Sage Rodriguez</td>
                                                <td>Netherlands</td>
                                                <td>Baileux</td>
                                                <td className="text-right">$56,142
                                                </td>
                                            </tr><tr>
                                                <td>Philip Chaney</td>
                                                <td>Korea, South</td>
                                                <td>Overland Park</td>
                                                <td className="text-right">$38,735
                                                </td>
                                            </tr><tr className="table-danger">
                                                <td>Doris Greene</td>
                                                <td>Malawi</td>
                                                <td>Feldkirchen in Kärnten</td>
                                                <td className="text-right">$63,542
                                                </td>
                                            </tr><tr>
                                                <td>Mason Porter</td>
                                                <td>Chile</td>
                                                <td>Gloucester</td>
                                                <td className="text-right">$78,615
                                                </td>
                                            </tr><tr className="table-warning">
                                                <td>Jon Porter</td>
                                                <td>Portugal</td>
                                                <td>Gloucester</td>
                                                <td className="text-right">$98,615
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegularTable;