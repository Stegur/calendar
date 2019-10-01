import React from 'react'

function Calendar(props) {
    const { date } = props;

    return (
        <>
            <div className="ui-datepicker">
                <div className="ui-datepicker-material-header">
                    <div className="ui-datepicker-material-day">{date.format('dddd')[0].toUpperCase() + date.format('dddd').slice(1)}</div>
                    <div className="ui-datepicker-material-date">
                        <div className="ui-datepicker-material-day-num">{date.date()}</div>
                        <div className="ui-datepicker-material-month">
                            {date.month() === 0 ? 'ЯНВАРЯ' :
                                date.month() === 1 ? 'ФЕВРАЛЯ' :
                                    date.month() === 2 ? 'МАРТА' :
                                        date.month() === 3 ? 'АПРЕЛЯ' :
                                            date.month() === 4 ? 'МАЯ' :
                                                date.month() === 5 ? 'ИЮНЯ' :
                                                    date.month() === 6 ? 'ИЮЛЯ' :
                                                        date.month() === 7 ? 'АВГУСТА' :
                                                            date.month() === 7 ? 'СЕНТЯБРЯ' :
                                                                date.month() === 9 ? 'ОКТЯБРЯ' :
                                                                    date.month() === 10 ? 'НОЯБРЯ' :
                                                                        date.month() === 11 ? 'ДЕКАБРЯ' :
                                                                            'Сбой...'
                            }</div>
                        <div className="ui-datepicker-material-year">{date.year()}</div>
                    </div>
                </div>
                <div className="ui-datepicker-header">
                    <div className="ui-datepicker-title">
                        <span className="ui-datepicker-month">{date.format('MMMM')[0].toUpperCase() + date.format('MMMM').slice(1)}</span>&nbsp;<span className="ui-datepicker-year">{date.year()}</span>
                    </div>
                </div>
                <table className="ui-datepicker-calendar">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="ui-datepicker-week-end" />
                        <col className="ui-datepicker-week-end" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" title="Понедельник">Пн</th>
                            <th scope="col" title="Вторник">Вт</th>
                            <th scope="col" title="Среда">Ср</th>
                            <th scope="col" title="Четверг">Чт</th>
                            <th scope="col" title="Пятница">Пт</th>
                            <th scope="col" title="Суббота">Сб</th>
                            <th scope="col" title="Воскресенье">Вс</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="ui-datepicker-other-month">30</td>
                            <td className={date.date() === 1 && "ui-datepicker-today"}>1</td>
                            <td className={date.date() === 2 && "ui-datepicker-today"}>2</td>
                            <td className={date.date() === 3 && "ui-datepicker-today"}>3</td>
                            <td className={date.date() === 4 && "ui-datepicker-today"}>4</td>
                            <td className={date.date() === 5 && "ui-datepicker-today"}>5</td>
                            <td className={date.date() === 6 && "ui-datepicker-today"}>6</td>
                        </tr>
                        <tr>
                            <td className={date.date() === 7 && "ui-datepicker-today"}>7</td>
                            <td className={date.date() === 8 && "ui-datepicker-today"}>8</td>
                            <td className={date.date() === 9 && "ui-datepicker-today"}>9</td>
                            <td className={date.date() === 10 && "ui-datepicker-today"}>10</td>
                            <td className={date.date() === 11 && "ui-datepicker-today"}>11</td>
                            <td className={date.date() === 12 && "ui-datepicker-today"}>12</td>
                            <td className={date.date() === 13 && "ui-datepicker-today"}>13</td>
                        </tr>
                        <tr>
                            <td className={date.date() === 14 && "ui-datepicker-today"}>14</td>
                            <td className={date.date() === 15 && "ui-datepicker-today"}>15</td>
                            <td className={date.date() === 16 && "ui-datepicker-today"}>16</td>
                            <td className={date.date() === 17 && "ui-datepicker-today"}>17</td>
                            <td className={date.date() === 18 && "ui-datepicker-today"}>18</td>
                            <td className={date.date() === 19 && "ui-datepicker-today"}>19</td>
                            <td className={date.date() === 20 && "ui-datepicker-today"}>20</td>
                        </tr>
                        <tr>
                            <td className={date.date() === 21 && "ui-datepicker-today"}>21</td>
                            <td className={date.date() === 22 && "ui-datepicker-today"}>22</td>
                            <td className={date.date() === 23 && "ui-datepicker-today"}>23</td>
                            <td className={date.date() === 24 && "ui-datepicker-today"}>24</td>
                            <td className={date.date() === 25 && "ui-datepicker-today"}>25</td>
                            <td className={date.date() === 26 && "ui-datepicker-today"}>26</td>
                            <td className={date.date() === 27 && "ui-datepicker-today"}>27</td>
                        </tr>
                        <tr>
                            <td className={date.date() === 28 && "ui-datepicker-today"}>28</td>
                            <td className={date.date() === 29 && "ui-datepicker-today"}>29</td>
                            <td className={date.date() === 30 && "ui-datepicker-today"}>30</td>
                            <td className={date.date() === 31 && "ui-datepicker-today"}>31</td>
                            <td className="ui-datepicker-other-month">1</td>
                            <td className="ui-datepicker-other-month">2</td>
                            <td className="ui-datepicker-other-month">3</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Calendar;