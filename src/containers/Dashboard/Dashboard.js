
import React from 'react';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardTabs from '../../components/DashboardTabs/DashboardTabs';
import DashboardCashDeposit from '../../components/DashboardCashDeposit/DashboardCashDeposit';
import DashboardRecentPurchase from '../../components/DashboardRecentPurchase/DashboardRecentPurchase';

const dashboard = () => {
    return (
        <React.Fragment>
            <DashboardHeader />
            <DashboardTabs />
            <DashboardCashDeposit />
            <DashboardRecentPurchase />
        </React.Fragment>
    );
};


export default dashboard;
