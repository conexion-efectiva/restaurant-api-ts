import OrderService from "../services/OrderServices";
import { Request,Response,NextFunction } from "express"
let instance: any;

class OrderController {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getList(req:Request, res:Response) {
    const order = await OrderService.getInstance().list();
    res.json(order)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getOne(req:Request, res:Response) {
    const order = await OrderService.getInstance().get(req.params.id);
    if (order == null) {
      res.status(404).json({ message: "ID no encontrado" });
      return;
    }

    res.json(order);
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async put(req:Request, res:Response) {
    const existOrden = await OrderService.getInstance().get(req.params.id);
    if (existOrden == null) {
      res.status(404).json({ message: "Not found" });
    }
    let order = { ...req.body, _id: req.params.id };
    order = await OrderService.getInstance().update(order);
    res.json(order);
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async delete(req:Request, res:Response) {
    const existOrden = await OrderService.getInstance().get(req.params.id);
    if (existOrden == null) {
      res.status(404).json({ message: "Not found" });
    }
    await OrderService.getInstance().delete(req.params.id);
    res.json(existOrden);
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async post(req:Request, res:Response) {
    const order = await OrderService.getInstance().insert(req.body);
    res.json(order);
  }

  static getInstance() {
    if (instance == null) {
      instance = new OrderController();
    }

    return instance;
  }
}

export default OrderController;
