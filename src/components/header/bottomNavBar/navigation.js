import React from 'react';
import { Grid } from '@material-ui/core';
class Navigation extends React.Component {
    render() {
        return (
            <Grid item xs={12} lg={7} sm={7} md={7}>
                <nav className="category">
                    <ul className="category__menu">
                        <li className="category__menu__item submenu">
                            <a href="#">Men</a>
                            <ul className="megamenu">
                                <ul>
                                    <h4>Clothing</h4>
                                    <li>
                                        <a href="#">Top</a>
                                    </li>
                                    <li>
                                        <a href="#">Bottom</a>

                                    </li>
                                    <li>
                                        <a href="#">Outer</a>

                                    </li>
                                    <li>
                                        <a href="#">Dresses & Onepiece</a>

                                    </li>
                                    <li>
                                        <a href="#">Sports Wear</a>

                                    </li>
                                </ul>
                                <ul>
                                    <h4>Clothing</h4>
                                    <li><a href="#">Top</a></li>
                                    <li><a href="#">Bottom</a></li>
                                    <li><a href="#">Outer</a></li>
                                    <li><a href="#">Dresses & Onepiece</a></li>
                                    <li><a href="#">Sports Wear</a></li>
                                    <li><a href="#">Formal Wear</a></li>
                                    <li><a href="#">Inner & Night Wear</a></li>
                                    <li><a href="#">Ethnic Wear</a></li>
                                    <li><a href="#">Misc. Clothing</a></li>
                                </ul>
                                <ul>
                                    <h4>Clothing</h4>
                                    <li><a href="#">Top</a></li>
                                    <li><a href="#">Bottom</a></li>
                                    <li><a href="#">Outer</a></li>
                                    <li><a href="#">Dresses & Onepiece</a></li>
                                    <li><a href="#">Sports Wear</a></li>
                                    <li><a href="#">Formal Wear</a></li>
                                    <li><a href="#">Inner & Night Wear</a></li>
                                    <li><a href="#">Ethnic Wear</a></li>
                                    <li><a href="#">Misc. Clothing</a></li>
                                </ul>
                                <ul>
                                    <h4>Clothing</h4>
                                    <li><a href="#">Top</a></li>
                                    <li><a href="#">Bottom</a></li>
                                    <li><a href="#">Outer</a></li>
                                    <li><a href="#">Dresses & Onepiece</a></li>
                                    <li><a href="#">Sports Wear</a></li>
                                    <li><a href="#">Formal Wear</a></li>
                                    <li><a href="#">Inner & Night Wear</a></li>
                                    <li><a href="#">Ethnic Wear</a></li>
                                    <li><a href="#">Misc. Clothing</a></li>
                                </ul>
                                <ul>
                                    <h4>Clothing</h4>
                                    <li>
                                        <a href="#">Top</a>
                                    </li>
                                    <li>
                                        <a href="#">Bottom</a>

                                    </li>
                                </ul>
                            </ul>
                        </li>
                        <li className="category__menu__item">
                            <a href="#">
                                Women
                                        </a>
                        </li>
                        <li className="category__menu__item">
                            <a href="#">
                                Electronics
                                        </a>
                        </li>
                        <li className="category__menu__item">
                            <a href="#">
                                Home · Baby · Hobby
                                        </a>
                        </li>
                        <li className="category__menu__item">
                            <a href="#">
                                Office · Industry
                                        </a>
                        </li>
                    </ul>
                </nav>
            </Grid>
        )
    }
};
export default Navigation;