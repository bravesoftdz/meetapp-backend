import Sequelize, { Model } from 'sequelize';

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        localization: Sequelize.STRING,
        date: Sequelize.DATE,
        banner: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
    this.belongsToMany(models.User, {
      through: 'users-meetups',
      foreignKey: 'meetup_id',
      as: 'users',
    });
    // this.belongsTo(models.User, { foreignKey: 'workingDayId' })
  }
}

export default Meetup;