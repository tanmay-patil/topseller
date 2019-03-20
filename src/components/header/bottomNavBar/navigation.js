import React from 'react';
import { Grid, Typography } from '@material-ui/core';
class Navigation extends React.Component {
    render() {
        return (
            <Grid item xs={12} lg={7} sm={7} md={7}>
                    <nav className="category">
                        <ul className="category__menu">
                            <li className="category__menu__item submenu">
                                <Typography>
                                    Men
                                        </Typography>
                                <ul className="megamenu">
                                    <ul>
                                        <h4>Clothing</h4>
                                        <li>
                                            <Typography>Top</Typography>
                                        </li>
                                        <li>
                                            <Typography>Bottom</Typography>

                                        </li>
                                        <li>
                                            <Typography>Outer</Typography>

                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Clothing</h4>
                                        <li>
                                            <Typography>Top</Typography>
                                        </li>
                                        <li>
                                            <Typography>Bottom</Typography>

                                        </li>
                                        <li>
                                            <Typography>Outer</Typography>

                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Clothing</h4>
                                        <li>
                                            <Typography>Top</Typography>
                                        </li>
                                        <li>
                                            <Typography>Bottom</Typography>

                                        </li>
                                        <li>
                                            <Typography>Outer</Typography>

                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Clothing</h4>
                                        <li>
                                            <Typography>Top</Typography>
                                        </li>
                                        <li>
                                            <Typography>Bottom</Typography>

                                        </li>
                                        <li>
                                            <Typography>Outer</Typography>

                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Clothing</h4>
                                        <li>
                                            <Typography>Top</Typography>
                                        </li>
                                        <li>
                                            <Typography>Bottom</Typography>

                                        </li>
                                        <li>
                                            <Typography>Outer</Typography>

                                        </li>
                                        <li>
                                            <Typography>Outer</Typography>

                                        </li>
                                        <li>
                                            <Typography>Outer</Typography>

                                        </li>
                                        <li>
                                            <Typography>Outer</Typography>

                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li className="category__menu__item">
                                <Typography>
                                    Women
                                        </Typography>
                            </li>
                            <li className="category__menu__item">
                                <Typography>
                                    Electronics
                                        </Typography>
                            </li>
                            <li className="category__menu__item">
                                <Typography>
                                    Home · Baby · Hobby
                                        </Typography>
                            </li>
                            <li className="category__menu__item">
                                <Typography>
                                    Office · Industry
                                        </Typography>
                            </li>
                        </ul>
                    </nav>
            </Grid>
        )
    }
};
export default Navigation;